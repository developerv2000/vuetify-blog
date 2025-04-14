import { usePage } from '@inertiajs/vue3'

export default function useFormErrors() {
    const errors = usePage().props.errors || {};

    const getError = (field) => {
        return errors[field] || null;
    }

    const hasError = (field) => !!errors[field];

    return {
        errors,
        getError,
        hasError
    };
}
