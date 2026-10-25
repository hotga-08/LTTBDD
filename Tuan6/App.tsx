// // Đề Lab06 · Bài 5 — Drawer (mở thẳng vào Bài 5; các bài trước vẫn nằm trong project)
// import { StatusBar } from 'expo-status-bar';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { DrawerApp } from './src/ex5/DrawerApp';

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaProvider>
//         {/* Bài 5 · 5.1: Drawer gồm Home / Profile / Settings */}
//         <DrawerApp />
//         <StatusBar style='auto' />
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//   );
// }


// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { SelectPhoneApp } from './src/ex1/SelectPhoneApp';
// import { PHONES } from './src/data/phones'; 
// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <SelectPhoneApp phone={PHONES[0]} />
//       <StatusBar style="auto" />
//     </SafeAreaProvider>
//   );
// }


// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { SelectPhoneApi } from './src/ex1/SelectPhoneApi'; 

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       {/* Chạy Bài 2 */}
//       <SelectPhoneApi />
//       <StatusBar style="auto" />
//     </SafeAreaProvider>
//   );
// }


// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { BottomTabApp } from './src/ex3/BottomTabApp'; 

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       {/* Chạy Bài 3 */}
//       <BottomTabApp />
//       <StatusBar style="auto" />
//     </SafeAreaProvider>
//   );
// }

// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { StackTabApp } from './src/ex4/StackTabApp';
// export default function App() {
//   return (
//     <SafeAreaProvider>
//       {/* Chạy Bài 4 */}
//       <StackTabApp />
//       <StatusBar style="auto" />
//     </SafeAreaProvider>
//   );
// }

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerApp } from './src/ex5/DrawerApp';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {/* Chạy Bài 5 */}
        <DrawerApp />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}