import { Datagrid, List, ReferenceField, TextField, BooleanField, NumberField} from "react-admin"

export const ChallengeOptionList = () => {
    return(
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id"/>
                <TextField source="text"/>
                <BooleanField source="correct" />
                <ReferenceField source="ChallengeId" reference="Challenges"/>
                <TextField source="imageSrc"/>
                <TextField source="audioSrc"/>

            </Datagrid>
        </List>
    );
};