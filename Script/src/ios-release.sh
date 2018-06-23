#!/usr/bin/env bash -e

ROOT_DIR=`pwd`
WORKSPACE="${ROOT_DIR}/Script/src"
CONFIG_FILE="${WORKSPACE}/ios-config.json"
BUILD_ENVIRONMENT=`node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1]), null, 4).BUILD_ENVIRONMENT);"  ${CONFIG_FILE}`
echo 'Build env:' $BUILD_ENVIRONMENT

PROJECT_NAME=$(cat package.json | grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
ENV_NAME="${PROJECT_NAME}-${BUILD_ENVIRONMENT}"

BUNDLE_ID=`node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1]), null, 4).BUNDLE_ID);"  ${CONFIG_FILE}`
DEVELOPMENT_TEAM=`node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1]), null, 4).DEVELOPMENT_TEAM);"  ${CONFIG_FILE}`
PROVISIONING_PROFILE_NAME=`node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1]), null, 4).PROVISIONING_PROFILE_NAME);"  ${CONFIG_FILE}`
CODE_SIGN_IDENTITY=`node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1]), null, 4).CODE_SIGN_IDENTITY);"  ${CONFIG_FILE}`
BUILD_HOST=`node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1]), null, 4).BUILD_HOST);"  ${CONFIG_FILE}`

SIGNING_STYLE="manual"
if [ "$PROVISIONING_PROFILE_NAME" == "" ]
then
    CODE_SIGN_IDENTITY="iPhone Developer"
    SIGNING_STYLE="automatic"
fi

export RCT_NO_LAUNCH_PACKAGER=true 

# Reset cache
NEED_RESET_CACHE=`node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1]), null, 4).NEED_RESET_CACHE);"  ${CONFIG_FILE}`
if [ "$NEED_RESET_CACHE" == true ]
then
    echo 'Reset cache'
    rm -rf $TMPDIR/react-* && rm -rf $TMPDIR/metro-* && watchman watch-del-all && rm -rf ios/build && rm -rf node_modules/ && npm cache clean --force
fi

# Install dependencies
echo 'Install dependencies'
npm config set prefix ${ROOT_DIR}
npm install

# Cleanup ios
echo 'Cleanup ios'
rm -rf "${ROOT_DIR}/ios/build"
rm -rf "${ROOT_DIR}"/ios/*.plist

# React native build bundle
echo 'Build bundle'
echo ".env.${BUILD_ENVIRONMENT}" > /tmp/envfile
npm run ios-version

# iOS build script
echo 'Start build ipa'

cd ios
pod install

env DEVELOPER_DIR="/Applications/Xcode.app" /usr/bin/xcodebuild -workspace ${PROJECT_NAME}.xcworkspace/ -scheme ${PROJECT_NAME} -configuration Release CODE_SIGN_IDENTITY="${CODE_SIGN_IDENTITY}" archive -archivePath "${ROOT_DIR}/ios/build/${ENV_NAME}/${ENV_NAME}.xcarchive" -verbose

cat <<EOT >> manifest-${ENV_NAME}.plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict> 
    <key>compileBitcode</key>
    <true/>
    <key>method</key>
    <string>development</string>
    <key>provisioningProfiles</key>
    <dict>
        <key>${BUNDLE_ID}</key>
        <string>${PROVISIONING_PROFILE_NAME}</string>
    </dict>
    <key>signingCertificate</key>
    <string>iPhone Developer</string>
    <key>signingStyle</key>
    <string>${SIGNING_STYLE}</string>
    <key>stripSwiftSymbols</key>
    <true/>
    <key>teamID</key>
    <string>${DEVELOPMENT_TEAM}</string>
    <key>thinning</key>
    <string>&lt;none&gt;</string>
    <key>manifest</key>
    <dict>        
        <key>appURL</key>
        <string>${BUILD_HOST}/dist/ios/IOS.ipa</string>
        <key>displayImageURL</key>
        <string>${BUILD_HOST}/dist/icon57.png</string>
        <key>fullSizeImageURL</key>
        <string>${BUILD_HOST}/dist/icon512.png</string>
    </dict>
</dict>
</plist>
EOT

echo 'Export'
${WORKSPACE}/ios-xcbuild.sh -exportArchive -archivePath ${ROOT_DIR}/ios/build/${ENV_NAME}/${ENV_NAME}.xcarchive -exportPath ${ROOT_DIR}/ios/build/${ENV_NAME} -exportOptionsPlist manifest-${ENV_NAME}.plist

mv ${ROOT_DIR}/ios/build/${ENV_NAME}/${PROJECT_NAME}.ipa ${ROOT_DIR}/Script/server/dist/ios/IOS.ipa
mv ${ROOT_DIR}/ios/build/${ENV_NAME}/manifest.plist ${ROOT_DIR}/Script/server/dist/ios/manifest.plist