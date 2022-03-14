import React, { useContext } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

const Profile: React.FC = () => {
  const { setAuth } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button title="Logout" onPress={() => setAuth('')} />
    </SafeAreaView>
  );
};

export default Profile;
