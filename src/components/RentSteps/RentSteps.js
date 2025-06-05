import React from 'react';
import { View, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import { styles } from './RentSteps.styles';

const stepsData = [
  {
    id: 1,
    title: 'Explore & Rent',
    description: 'Find what you need, and we will make it happen!',
  },
  {
    id: 2,
    title: 'Verify & Book Slot',
    description: 'Complete KYC, Select Delivery Slot.',
  },
  {
    id: 3,
    title: 'Swift Delivery',
    description: 'Free delivery to your doorstep in just 72 hours.',
  },
];

const getStepStyle = (stepId) => {
  switch (stepId) {
    case 1:
      return styles.stepOneCard;
    case 2:
      return styles.stepTwoCard;
    case 3:
      return styles.stepThreeCard;
    default:
      return null;
  }
};

const RentSteps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Rent in Just 3 Steps</Text>
      <View style={styles.cardsContainer}>
        {stepsData.map((step) => (
          <Surface 
            key={step.id} 
            style={[
              styles.card,
              step.id === 3 && styles.lastCard,
              getStepStyle(step.id)
            ]}
          >
            <View style={styles.numberContainer}>
              <Text style={styles.number}>{step.id}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{step.title}</Text>
              <Text style={styles.description}>{step.description}</Text>
            </View>
          </Surface>
        ))}
      </View>
    </View>
  );
};

export default RentSteps; 