export type ContactData = {
    name: string;
    title: string;
    description: string;
    message: string;
    actions: {
        label: string;
        href: string;
        variant: "primary" | "secondary";
    }[];
    footer: string;
};