import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useInput } from '../../../hooks/useInupt';
import { AdminSubject } from '../../../styles/common';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import ProdTable from './table/prodTable';

const ProdOrign = ({ prodOrigin, setProdOrigin }) => {
    const [optionName, onChangeOptionName, setOptionName] = useInput('');
    const [optionContent, onChangeOptionContent, setOptionContent] = useInput('');

    const onAddProdOption = useCallback(() => {
        if (optionName.trim() === '' && optionContent.trim() === '') {
            return;
        }
        setProdOrigin([...prodOrigin, { name: optionName, content: optionContent }]);
    }, [prodOrigin, optionName, optionContent]);

    useEffect(() => {
        setOptionName('');
        setOptionContent('');
    }, [prodOrigin]);

    return (
        <>
            <ProdOptionTemplate>
                <AdminSubject>상품 제공 공시</AdminSubject>
                <ProdOptionForm>
                    <Input
                        width="20%"
                        mainColor="#fff"
                        subColor="#222"
                        placeholder="--명칭--"
                        style={{ textAlign: 'center' }}
                        value={optionName}
                        onChange={onChangeOptionName}
                    />
                    <span>
                        <Input
                            width="760px"
                            mainColor="#fff"
                            subColor="#222"
                            margin="0 8px"
                            value={optionContent}
                            onChange={onChangeOptionContent}
                        />
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
            <ProdTable type="origin" data={prodOrigin} />
        </>
    );
};
export default ProdOrign;

const ProdOptionTemplate = styled.div`
    margin: 16px 0;
`;

const ProdOptionForm = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
`;
