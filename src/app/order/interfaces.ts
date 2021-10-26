export interface Products {
    orderId?: number
    name?: string;
    material?: string;
    description?: string;
    price?: number;
    quantity?: number;
    image?: string;
}

export interface OrderRequisition {
    dueDate?: string;
    requestedBy?: string;
    productList?: Products[];
    center?: string;
    status?: string;
    paymentType?: string;
    refreshList?: boolean;
    submittedAt?: string;
    subtotal?: number;
}