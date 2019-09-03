import * as typesAPI from "./fakeTypeService";
import uuid from "uuid";

const todos = [
  {
    _id: uuid.v4(),
    title: "Money In The Grave",
    type: { _id: "5b21ca3eeb7f6fbccd471818", name: "Hip-Hop" }
  },
  {
    _id: uuid.v4(),
    title: "Pop Out",
    type: { _id: "5b21ca3eeb7f6fbccd471818", name: "Hip-Hop" }
  },
  {
    _id: uuid.v4(),
    title: "Summer Days",
    type: { _id: "5b21ca3eeb7f6fbccd471820", name: "EDM" }
  },
  {
    _id: uuid.v4(),
    title: "Smells Like Teen Spirit",
    type: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rock" }
  },
  {
    _id: uuid.v4(),
    title: "Smoke On The Water",
    type: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rock" }
  },
  {
    _id: uuid.v4(),
    title: "Stairway To Heaven",
    type: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rock" }
  },
  {
    _id: uuid.v4(),
    title: "Call You Mine",
    type: { _id: "5b21ca3eeb7f6fbccd471820", name: "EDM" }
  },
  {
    _id: uuid.v4(),
    title: "Taki Taki",
    type: { _id: "5b21ca3eeb7f6fbccd471820", name: "EDM" }
  },
  {
    _id: uuid.v4(),
    title: "The London",
    type: { _id: "5b21ca3eeb7f6fbccd471818", name: "Hip-Hip" }
  },
  {
    id: uuid.v4(),
    title: "Money In The Grave",
    type: { _id: "5b21ca3eeb7f6fbccd471818", name: "Hip-Hop" }
  },
  {
    _id: uuid.v4(),
    title: "Pop Out",
    type: { _id: "5b21ca3eeb7f6fbccd471818", name: "Hip-Hop" }
  },
  {
    _id: uuid.v4(),
    title: "Summer Days",
    type: { _id: "5b21ca3eeb7f6fbccd471820", name: "EDM" }
  },
  {
    _id: uuid.v4(),
    title: "Smells Like Teen Spirit",
    type: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rock" }
  },
  {
    _id: uuid.v4(),
    title: "Smoke On The Water",
    type: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rock" }
  },
  {
    _id: uuid.v4(),
    title: "Stairway To Heaven",
    type: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rock" }
  },
  {
    _id: uuid.v4(),
    title: "Call You Mine",
    type: { _id: "5b21ca3eeb7f6fbccd471820", name: "EDM" }
  },
  {
    _id: uuid.v4(),
    title: "Taki Taki",
    type: { _id: "5b21ca3eeb7f6fbccd471820", name: "EDM" }
  },
  {
    _id: uuid.v4(),
    title: "The London",
    type: { _id: "5b21ca3eeb7f6fbccd471818", name: "Hip-Hip" }
  },
  {
    id: uuid.v4(),
    title: "Taki Taki",
    type: { _id: "5b21ca3eeb7f6fbccd471820", name: "EDM" }
  },
  {
    _id: uuid.v4(),
    title: "The London",
    type: { _id: "5b21ca3eeb7f6fbccd471818", name: "Hip-Hip" }
  }
];

export function getTodos() {
  return todos;
}

export function getTodo(id) {
  return todos.find(t => t._id === id);
}

export function saveTodo(todo) {
  let todoInDb = todos.find(t => t._id === todo._id) || {};
  todoInDb.name = todo.name;
  todoInDb.type = typesAPI.types.find(t => t._id === todo.typeId);

  if (!todoInDb._id) {
    todoInDb._id = Date.now();
    todos.push(todoInDb);
  }

  return todoInDb;
}

export function deleteTodo(id) {
  let todoInDb = todos.find(t => t._id === id);
  todos.splice(todos.indexOf(todoInDb), 1);

  return todoInDb;
}
