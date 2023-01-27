export interface State {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface TopLevel {
  additional_info: string;
  auto_return: string;
  back_urls: Urls;
  binary_mode: boolean;
  client_id: string;
  collector_id: number;
  coupon_code: null;
  coupon_labels: null;
  date_created: string;
  date_of_expiration: null;
  expiration_date_from: null;
  expiration_date_to: null;
  expires: boolean;
  external_reference: string;
  id: string;
  init_point: string;
  internal_metadata: null;
  items: Item[];
  marketplace: string;
  marketplace_fee: number;
  metadata: Metadata;
  notification_url: null;
  operation_type: string;
  payer: Payer;
  payment_methods: PaymentMethods;
  processing_modes: null;
  product_id: null;
  redirect_urls: Urls;
  sandbox_init_point: string;
  site_id: string;
  shipments: Shipments;
  total_amount: null;
  last_updated: null;
}

export interface Urls {
  failure: string;
  pending: string;
  success: string;
}

export interface Item {
  id: string;
  category_id: string;
  currency_id: string;
  description: string;
  title: string;
  quantity: number;
  unit_price: number;
}

export interface Metadata {}

export interface Payer {
  phone: Phone;
  address: Address;
  email: string;
  identification: Identification;
  name: string;
  surname: string;
  date_created: null;
  last_purchase: null;
}

export interface Address {
  zip_code: string;
  street_name: string;
  street_number: null;
}

export interface Identification {
  number: string;
  type: string;
}

export interface Phone {
  area_code: string;
  number: string;
}

export interface PaymentMethods {
  default_card_id: null;
  default_payment_method_id: null;
  excluded_payment_methods: ExcludedPayment[];
  excluded_payment_types: ExcludedPayment[];
  installments: null;
  default_installments: null;
}

export interface ExcludedPayment {
  id: string;
}

export interface Shipments {
  default_shipping_method: null;
  receiver_address: ReceiverAddress;
}

export interface ReceiverAddress {
  zip_code: string;
  street_name: string;
  street_number: null;
  floor: string;
  apartment: string;
  city_name: null;
  state_name: null;
  country_name: null;
}

export interface InvitationInfo {
  is_code_valid: boolean;
  invitation_code: string;
  discounted_price: number;
}
