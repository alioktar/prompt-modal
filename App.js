import React from 'react';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';

import Section from './components/Section';
import PromptModal from './components/PromptModal';

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Section title="React Native Prompt Modal Example App">
          <Button title="Open Modal" onPress={() => toggleModal()} />
        </Section>
      </ScrollView>
      <PromptModal open={isOpen} modalHeight={400}>
        <View
          style={{
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'space-between',
          }}>
          <Section>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Section>
          <Button title="Close Modal" onPress={() => toggleModal()} />
        </View>
      </PromptModal>
    </SafeAreaView>
  );
};

export default App;
