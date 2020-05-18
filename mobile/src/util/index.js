import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const statusFormatedOrder = (status) => {
    switch (status) {
        case 'done':
            return 'Entregue';
        case 'progress':
            return 'Em andamento';
        case 'canceled':
            return 'Cancelado';
        default:
            return 'Pendente';
    }
};

export const formatDataOrder = (data) => {
    return data
        ? format(parseISO(data), 'dd/MM/yyyy', { locale: pt })
        : '--/--/----';
};
