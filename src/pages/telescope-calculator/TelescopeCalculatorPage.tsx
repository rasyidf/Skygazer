import React from 'react';
import { Container, Paper, Text, Button } from '@mantine/core';

export function TelescopeCalculatorPage() {
    return (
        <Container>
            <Paper p="md" shadow="xs">
                <Text>Object Type Selector</Text>
                <Text>Telescope Settings Form</Text>
            </Paper>

            <Button>Save Calculations</Button>
        </Container>
    );
}
