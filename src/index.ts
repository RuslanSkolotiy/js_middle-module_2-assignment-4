interface ITotal {
    price: number;
    discount: number;
    isInstallment: boolean;
    months: number;
}

const totalPrice = ({
    price,
    discount,
    isInstallment,
    months,
}: ITotal): number => {
    let total: number = (price * (100 - discount)) / 100;
    if (isInstallment) {
        return total / months;
    }
    return total;
};

const total: number = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
}); // 6250
console.log(total);
