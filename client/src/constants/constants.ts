import { CoffeeSize, DeliOption, LatLng, PaymentMethod } from "@/types";

export const APP_NAME = "Café Integrador";

export const GOOGLE_OAUTH_CLIENT_ID = import.meta.env
  .VITE_GOOGLE_OAUTH_CLIENT_ID;

export const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export const defaultCoordinate: LatLng = {
  lng: 96.17045650343823,
  lat: 16.785692464382592,
};

export const defaultDeliFee = 12;

export const coffeeSizeOptions = [
  {
    value: CoffeeSize.SMALL,
    label: "Small",
  },
  {
    value: CoffeeSize.MEDIUM,
    label: "Medium",
  },
  {
    value: CoffeeSize.LARGE,
    label: "Large",
  },
];

export const deliOptions = [
  {
    value: DeliOption.DELIVER,
    label: "Entregar",
  },
  {
    value: DeliOption.PICK_UP,
    label: "Retirar",
  },
];

export const paymentMethodOptions = [
  {
    value: PaymentMethod.BOLETO,
    icon: "/images/boleto.jpg",
    label: "Boleto",
  },
  {
    value: PaymentMethod.DINHEIRO,
    label: "Dinheiro",
    icon: "/images/cash-payment-icon.png",
  },
];
