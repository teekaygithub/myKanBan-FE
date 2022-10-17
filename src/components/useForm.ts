import React, {useState} from 'react';

export const useForm = <S>(initialValue: any): {
    value: S,
    modValue: (val:S) => void,
    reset: () => void,
    bind: {
        value: S,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }
} => {
    const [value, setValue] = useState<S>(initialValue);

    const modValue = (val:S) => {setValue(val)}

    return {
        value,
        modValue,
        reset: () => setValue((null as S)),
        bind: {
            value,
            onChange: (event) => {
                setValue((event.target.value as S));
            }
        }
    };
};