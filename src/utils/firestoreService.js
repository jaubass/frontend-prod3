import firestore from '@react-native-firebase/firestore';

export const getDatosDesdeFirestore = async () => {
  try {
    const datosSnapshot = await firestore().collection('frontend-prod').get();
    const datos = datosSnapshot.docs.map(doc => doc.data());
    return datos;
  } catch (error) {
    console.error('Error al obtener datos desde Firestore:', error);
    throw error;
  }
};
