export let notes = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

export const getActiveNotes = () => {
  const activeNotes = notes.filter((val) => val.archived === false);
  return activeNotes;
};

export const getArchivedNotes = () => {
  const activeNotes = notes.filter((val) => val.archived === true);
  return activeNotes;
};

export const addNote = ({ title, body }) => {
  const length = notes.length;
  let error = false;
  notes = [
    ...notes,
    {
      id: +new Date(),
      title: title,
      body: body,
      createdAt: "" + new Date(),
      archived: false,
    },
  ];

  if (length !== notes.length) {
    return error;
  }
  return !error;
};

export const getNote = (id) => {
  const note = notes.find((val) => val.id === id);
  return note;
};

export const deleteNote = (id) => {
  const length = notes.length;
  let error = false;
  const filteredNotes = notes.filter((val) => val.id !== id);
  notes = filteredNotes;
  if (length !== notes.length) {
    return error;
  }
  return !error;
};

export const moveNote = (id) => {
  const arcivedNote = notes.map((val) => {
    return val.id === id ? { ...val, archived: !val.archived } : val;
  });
  notes = arcivedNote;
  return notes;
};

export const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

// export {
//   addNote,
//   archiveNote,
//   deleteNote,
//   getActiveNotes,
//   getNote,
//   notes,
//   showFormattedDate,
// };
