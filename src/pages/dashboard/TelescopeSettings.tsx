import { NumberInput, Paper, Select, Text } from "@mantine/core";

export function TelescopeSettings() {
    const telescopeTypes = [{ value: 'type1', label: 'Type 1' }, { value: 'type2', label: 'Type 2' }];
    const eyepieceTypes = [
        { value: 'eyepiece1', label: 'Eyepiece 1' },
        { value: 'eyepiece2', label: 'Eyepiece 2' },
    ];

    return (
        <Paper p="md" shadow="xs">
            <Select label="Telescope Type" data={telescopeTypes} />
            <NumberInput label="Telescope Size" />
            <Select label="Eyepiece Type" data={eyepieceTypes} />
            <Text>Magnification: </Text>
            <Text>Focal Length: </Text>
            <Text>Eyepiece Size: </Text>
        </Paper>
    );
}
