#!/bin/bash

# Ensure ANDROID_HOME is set for WSL (using symlinked path)
export ANDROID_HOME=$HOME/Android/sdk
export PATH="$HOME/.local/bin:$PATH"
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin

# Start Expo with Android
npm run android
