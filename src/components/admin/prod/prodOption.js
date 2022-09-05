import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useInput } from '../../../hooks/useInupt';
import { AdminSubject } from '../../../styles/common';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import ProdTable from './table/prodTable';

const ProdOption = ({ prodOption, setProdOtion }) => {
    const [optionName, onChangeOptionName, setOptionName] = useInput('');
    const [optionPrice, onChangeOptionPrice, setOptionPrice] = useInput('');

    const onAddProdOption = useCallback(() => {
        if (optionName.trim() === '' && optionPrice.trim() === '') {
            return;
        }
        setProdOtion([...prodOption, { name: optionName, content: optionPrice }]);
    }, [prodOption, optionName, optionPrice]);

    useEffect(() => {
        setOptionName('');
        setOptionPrice('');
    }, [prodOption]);

    return (
        <>
            <ProdOptionTemplate>
                <AdminSubject>상품 옵션</AdminSubject>
                <ProdOptionForm>
                    <Input
                        width="70%"
                        mainColor="#fff"
                        subColor="#222"
                        value={optionName}
                        onChange={onChangeOptionName}
                    />
                    <span>
                        가격
                        <Input
                            mainColor="#fff"
                            subColor="#222"
                            margin="0 8px"
                            value={optionPrice}
                            onChange={onChangeOptionPrice}
                        />
                        원
                    </span>
                    <Button
                        size="small"
                        mainColor="#61CA3C"
                        padding="1px"
                        fontSzie="12px"
                        onClick={onAddProdOption}
                    >
                        추가
                    </Button>
                </ProdOptionForm>
            </ProdOptionTemplate>
            <ProdTable type="option" data={prodOption} />
        </>
    );
};
export default ProdOption;

const ProdOptionTemplate = styled.div`
    margin: 16px 0;
`;

const ProdOptionForm = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
`;
