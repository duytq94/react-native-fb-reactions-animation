#!/usr/bin/env bash -e
_PROJECT_NAME=$(cat package.json | grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

_INFOPLIST_DIR="ios/${_PROJECT_NAME}/Info.plist"

_PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

# Set BUILD_NUMBER to the value 1 only if it is unset.
: ${BUILD_NUMBER=$(expr $(git log -1 --pretty=format:%ct) / 3600)}

# Update plist with new values

BUNDLE_VERSION=$(/usr/libexec/PlistBuddy -c "Print CFBundleVersion" "${_INFOPLIST_DIR}")
if [ "$BUNDLE_VERSION" != "$BUILD_NUMBER" ]
then
    /usr/libexec/PlistBuddy -c "Set :CFBundleVersion $BUILD_NUMBER" "${_INFOPLIST_DIR}"
fi

/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${_PACKAGE_VERSION#*v}" "${_INFOPLIST_DIR}"

echo "****************************************"
echo "PROJECT_NAME: " $_PROJECT_NAME
echo "PACKAGE_VERSION: " $_PACKAGE_VERSION
echo "BUILD_NUMBER: " $BUILD_NUMBER
echo "****************************************"
