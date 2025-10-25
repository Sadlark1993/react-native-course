#!/bin/bash

# Script para configurar o ambiente Android no WSL
# Execute com: source android-env.sh

echo "🤖 Configurando ambiente Android no WSL..."

# Configurações do Android SDK
export ANDROID_HOME="/mnt/c/Users/Sadla/AppData/Local/Android/Sdk"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export JAVA_HOME="/mnt/c/Program Files/Android/Android Studio/jbr"

# Aliases para ferramentas Android
alias adb='$ANDROID_HOME/platform-tools/adb.exe'
alias emulator='$ANDROID_HOME/emulator/emulator.exe'
alias java='"$JAVA_HOME/bin/java.exe"'
alias javac='"$JAVA_HOME/bin/javac.exe"'

# Verificar se as configurações estão funcionando
echo "📱 ANDROID_HOME: $ANDROID_HOME"
echo "☕ JAVA_HOME: $JAVA_HOME"
echo ""
echo "🔧 Testando ferramentas:"
echo -n "   ADB: "
adb version | head -1
echo -n "   Java: "
java -version 2>&1 | head -1

echo ""
echo "✅ Ambiente configurado! Agora você pode usar:"
echo "   npm run android   # ou expo start --android"
echo "   adb devices       # para ver dispositivos conectados"