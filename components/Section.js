import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Section = ({title, children}) => {
  return (
    <View style={styles.sectionContainer}>
      {title && <Text style={[styles.sectionTitle]}>{title}</Text>}
      <Text style={[styles.sectionDescription, {marginTop: title ? 10 : 0}]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    flexWrap: 'wrap',
  },
});

export default Section;
