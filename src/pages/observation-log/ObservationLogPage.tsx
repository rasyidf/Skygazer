import { Container, Paper, Text, Button } from '@mantine/core';

export function ObservationLogPage() {
    return (
        <Container>
            <Paper p="md" shadow="xs">
                <Text>Observation Log Table</Text>
            </Paper>

            <Button>Add Observation</Button>
        </Container>
    );
}
