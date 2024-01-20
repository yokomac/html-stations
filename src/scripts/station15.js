async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return await result
}

async function test(name) {
  return new Promise((resolve) => {
    setTimeout((() => {
      const updatedUsers = name.map(name => {
      name.full_name = name.family_name + ' ' + name.first_name;
      return name;
      });
      resolve(updatedUsers);
    }), 3000);
  });
};

getData();
