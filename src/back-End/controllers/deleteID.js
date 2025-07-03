export function remove({ req, res, database }) {
  const { id } = req.params;
  database.delete("task", id);
  return res.end(JSON.stringify({ success: true, id }));
}
