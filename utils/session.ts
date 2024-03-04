// session.ts
let status = false;

export function getSessionStatus() {
  return status;
}

export function setSessionStatus(newStatus: boolean) {
  status = newStatus;
}
