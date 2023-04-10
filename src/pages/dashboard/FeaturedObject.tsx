import { Button, Grid, Paper, Text } from "@mantine/core";

export function FeaturedObject() {
    return (
        <Paper p="md" mt={8} shadow="xs">
            <Grid>
                <Grid.Col span={6}>
                    <Text>Object Image</Text>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Text size="lg">Object Name</Text>
                    <Text>Object Description</Text>
                    <Button size="sm">Details</Button>
                </Grid.Col>
            </Grid>
        </Paper>
    );
}
