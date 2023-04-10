import { Container, Paper, Text, Button } from '@mantine/core';

export function AddObservationPage() {
    return (
        <Container>
            <Paper p="md" shadow="xs">
                <Text>Date Picker</Text>
                <Text>Time Picker</Text>
                <Text>Location Input</Text>
                <Text>Object Input (Dropdown or Manual Entry)</Text>
                <Text>Notes Input</Text>
            </Paper>

            <Button>Save</Button>
        </Container>
    );
}
