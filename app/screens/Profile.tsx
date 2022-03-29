import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import useStore from '../store/useStore';

const Profile: React.FC = () => {
  const logout = useStore((state) => state.logout);

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button
        title="Logout"
        onPress={() => {
          logout();
        }}
      />
    </SafeAreaView>
  );
};

export default Profile;
