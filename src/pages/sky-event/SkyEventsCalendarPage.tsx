import { Container, Paper, Text, Button } from '@mantine/core';

export function SkyEventsCalendarPage() {
    return (
        <Container>
            <Paper p="md" shadow="xs">
                <Text>Calendar</Text>
                <Text>Event Details Pop-Up</Text>
            </Paper>

            <Button>Add to Calendar</Button>
        </Container>
    );
}
