import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA1 = [
  {
    id: '01',
    title: '1. Breakfast',
  },
  {
    id: '02',
    title: '2. Social Media',
  },
  {
    id: '03',
    title: '3. Clean Room',
  },
  {
    id: '04',
    title: '4. Read Books',
  },
  {
    id: '05',
    title: '5. Bath',
  },
  {
    id: '06',
    title: '6. Skin Care',
  },
  {
    id: '07',
    title: '7. Play One Game',
  },
  {
    id: '08',
    title: '8. Rest',
  },
  
];

const DATA2 = [
  {
    id: '09',
    title: '9. Eat Lunch',
  },
  {
    id: '10',
    title: '10. Ready to School',
  },
  {
    id: '11',
    title: '11. Commute',
  },
  {
    id: '12',
    title: '12. Walk',
  },
  {
    id: '13',
    title: '13. Class',
  },
  {
    id: '14',
    title: '14. Study Hard',
  },
  {
    id: '15',
    title: '15. Quiz',
  },
  {
    id: '16',
    title: '16. Rest',
  },
  
];

const DATA3 = [
  {
    id: '17',
    title: '17. Go home',
  },
  {
    id: '18',
    title: '18. Commute',
  },
  {
    id: '19',
    title: '19. Rest',
  },
  {
    id: '20',
    title: '20. Eat Dinner',
  },
  {
    id: '21',
    title: '21. Play Game',
  },
  {
    id: '22',
    title: '22. Skin Care',
  },
  {
    id: '23',
    title: '23. Review',
  },
  {
    id: '24',
    title: '24. Social Media',
  },
  {
    id: '25',
    title: '25. Sleep',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text style={styles.titleText}>To Do List</Text>
    <Text style={styles.labelText}> Morning</Text>
      <FlatList
        data={DATA1}
        renderItem={({item}) => <Item title={item.id} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.labelText}> Afternoon</Text>
      <FlatList
        data={DATA2}
        renderItem={({item}) => <Item title={item.id} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.labelText}> Evening</Text>
      <FlatList
        data={DATA3}
        renderItem={({item}) => <Item title={item.id} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 36,
  },
  labelText: {
    fontStyle: 'italic',
    fontSize: 32,
  },
});

export default App;
