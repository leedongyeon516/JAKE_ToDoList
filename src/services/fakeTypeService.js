export const types = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Hip-Hop" },
  { _id: "", name: "Rock" },
  { _id: "", name: "EDM" }
];

export function getTypes() {
  return types.filter(t => t);
}
