// Models.js
import db from './firebase';

const userRef = db.collection('users');
const productRef = db.collection('products');

const userConverter = {
  toFirestore: (user) => {
    return {
      username: user.username,
      email: user.email,
      password: user.password,
      img: user.img,
      isAdmin: user.isAdmin,
      isActive: user.isActive,
      phone: user.phone,
      address: user.address,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();
    return {
      id: snapshot.id,
      username: data.username,
      email: data.email,
      password: data.password,
      img: data.img,
      isAdmin: data.isAdmin,
      isActive: data.isActive,
      phone: data.phone,
      address: data.address,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
    };
  },
};

const productConverter = {
  toFirestore: (product) => {
    return {
      title: product.title,
      desc: product.desc,
      price: product.price,
      stock: product.stock,
      img: product.img,
      color: product.color,
      brand: product.brand,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();
    return {
      id: snapshot.id,
      title: data.title,
      desc: data.desc,
      price: data.price,
      stock: data.stock,
      img: data.img,
      color: data.color,
      brand: data.brand,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
    };
  },
};

export const User = userRef.withConverter(userConverter);
export const Product = productRef.withConverter(productConverter);