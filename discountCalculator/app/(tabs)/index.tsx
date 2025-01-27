import { Image, StyleSheet, Platform, ViewStyle, StyleProp, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

type ContainerStyle = ViewStyle;
interface HomeScreenProps {
  containerStyle?: StyleProp<ViewStyle>;
}



export default function HomeScreen({containerStyle}: HomeScreenProps) {
  return (
    <SafeAreaView style={[styles.container, containerStyle]  } >
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        <Text style={{fontSize: 22}}>Discount Calculator</Text>
       
      </View>
      <View style={{marginHorizontal: 40}}>
        <Text style={{marginBottom: 10}}>Amount</Text>
        <TextInput style={{backgroundColor: 'white', paddingVertical: 20, borderRadius:20,
          borderColor: 'black', borderWidth: 1,
        }}/>
      </View>
      


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'lightblue',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
