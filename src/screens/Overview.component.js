import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {
  Divider,
  Icon,
  Card,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {TestScheduler} from 'jest';

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
      ],
    },
  ],
};

const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const StoreCard = () => {
  return (
    <Layout
      style={{
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 25 / 2,
        borderRadius: 20,
      }}>
      <Image
        source={{uri: 'https://picsum.photos/id/101/500/500'}}
        style={{height: 150, width: 150, borderRadius: 20}}
      />
    </Layout>
  );
};

export const OverviewScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <TopNavigation
        title={(evaProps) => (
          <Text {...evaProps} style={{fontWeight: 'bold'}}>
            Overview - Acclaim Meds
          </Text>
        )}
        alignment="center"
      />
      <Divider />
      <ScrollView>
        <StoreCard />
        <LineChart
          data={data}
          width={Dimensions.get('window').width - 25} // from react-native
          height={220}
          yAxisLabel="₹"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            alignItems: 'center',
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
