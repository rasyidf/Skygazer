import { Paper, Text } from "@mantine/core";

export function TelescopeSettings() {
    return (
        <Paper p="md" shadow="xs">
            <Text>Telescope Type (Dropdown)</Text>
            <Text>Telescope Size (Input)</Text>
            <Text>Eyepiece Type (Dropdown)</Text>
            <Text>Magnification (Output)</Text>
            <Text>Focal Length (Output)</Text>
            <Text>Eyepiece Size (Output)</Text>
        </Paper>
    );
}
