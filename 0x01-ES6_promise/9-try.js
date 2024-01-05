export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(e.message);
  } finally {
    queue.push('Guardrail was Processed');
  }
  return queue;
}
