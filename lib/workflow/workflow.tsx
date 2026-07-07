export function getWorkflow() {
  if (typeof window === "undefined") {
    return null;
  }

  const stored =
    sessionStorage.getItem("analysis");

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function saveWorkflow(
  workflow: unknown
) {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(
    "analysis",
    JSON.stringify(workflow)
  );
}

export function updateWorkflow(
  updater: (workflow: any) => any
) {
  const workflow = getWorkflow();

  if (!workflow) {
    return;
  }

  const updated = updater(workflow);

  saveWorkflow(updated);
}
export function mergeWorkflow(
  updates: Record<string, unknown>
) {
  const workflow = getWorkflow();

  if (!workflow) {
    return;
  }

  saveWorkflow({
    ...workflow,
    ...updates,
  });
}