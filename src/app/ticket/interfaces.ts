export interface Ticket {
    authorId?: string;
    supplierName?: string;
    title?: string;
    orderNumber?: number;
    subject?: string;
    status?: string;
    messages?: Message;
}

export interface Message {
    when?: string,
    from?: string,
    attachments?: Toolbar,
}

export interface Toolbar {
    messageId?: string;
    title?: string;
    description?: string;
    url?: string;
}

