export type StatusType = {
  waiting_payment: number;
  success_payment: number;
  failed_payment: number;
  order_processing: number;
  order_delivered: number;
  order_completed: number;
  order_expired: number;
}