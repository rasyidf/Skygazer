import { Paper, SegmentedControl, Text } from "@mantine/core";

export function UpcomingEvents() {
    const data = [
        { value: 'calendar', label: 'Calendar View' },
        { value: 'list', label: 'List View' },
    ];

    return (
        <Paper p="md" shadow="xs">
            <SegmentedControl data={data} />
        </Paper>
    );
}
