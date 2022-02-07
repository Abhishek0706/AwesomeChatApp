import firestore from '@react-native-firebase/firestore';

(async function bootstrap() {
  await firestore().settings({
    persistence: false, // disable offline persistence
  });
})();

export { firestore };
