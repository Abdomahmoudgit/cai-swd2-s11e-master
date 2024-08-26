import React, { useState } from "react";
import Cards from "../Cards/Cards";
import AddUser from "../AddUser/AddUser";

const App = () => {
  // تخزين القائمة الأصلية للمستخدمين في الحالة
  const [users, setUsers] = useState([
    { name: "Mohamed", age: 24, city: "Cairo", edu: "CS", id: 3 },
    { name: "Mario", age: 19, city: "Alex", edu: "Engineering", id: 4 },
    { name: "Mariam", age: 22, city: "Cairo", edu: "IS", id: 1 },
    { name: "Mariam", age: 25, city: "Qena", edu: "CS", id: 12 },
    { name: "Nora", age: 20, city: "Cairo", edu: "CS", id: 2 },
  ]);

  // حالة إضافية لتخزين المستخدمين المعروضين بناءً على البحث
  const [filteredUsers, setFilteredUsers] = useState(users);

  // إضافة مستخدم جديد
  const addUserHandler = (newUser) => {
    const updatedUsers = [...users, { ...newUser, id: Math.random() }];
    setUsers(updatedUsers); // تحديث قائمة المستخدمين الكاملة
    setFilteredUsers(updatedUsers); // تحديث قائمة المستخدمين المعروضة
  };

  // حذف مستخدم
  const deleteUserHandler = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers); // تحديث قائمة المستخدمين الكاملة
    setFilteredUsers(updatedUsers); // تحديث قائمة المستخدمين المعروضة
  };

  // البحث عن المستخدمين بناءً على الاسم
  const nameSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setFilteredUsers(
      users.filter((user) => user.name.toLowerCase().includes(searchValue))
    );
  };

  return (
    <>
      <input placeholder="search" onChange={nameSearch} />
      <Cards users={filteredUsers} onDelete={deleteUserHandler} />
      <AddUser add={addUserHandler} />
    </>
  );
};

export default App;
