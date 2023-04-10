import { Container, Paper, Text, Button, Grid, NumberInput } from '@mantine/core';
import { useCallback, useState } from 'react';
import { TelescopeCalculator } from "./TelescopeCalculator";


export function TelescopeCalculatorPage() {
    const [result, setResult] = useState<any[]>([]);
    const [scopeAperture, setScopeAperture] = useState(0);
    const [scopeFocalRatio, setScopeFocalRatio] = useState(0);
    const [eyepieceFocalLength, setEyepieceFocalLength] = useState(0);
    const [eyepieceApparentField, setEyepieceApparentField] = useState(0);

    const handleSubmit = useCallback((event: any) => {
        event.preventDefault();
        const telescope = new TelescopeCalculator(scopeAperture, scopeFocalRatio, eyepieceFocalLength, eyepieceApparentField);

        const resultArray = [
            { label: 'Focal Length', value: telescope.calcFocalLength() },
            { label: 'Magnification', value: telescope.calcMagnification() },
            { label: 'True Field of View', value: telescope.calcTrueFieldOfView() },
            { label: 'Exit Pupil', value: telescope.calcExitPupil() },
            { label: 'Theoretical Resolving Power', value: telescope.calcTheoreticalResolvingPower() },
            { label: 'Approximate Limiting Magnitude', value: telescope.calcLimitingMagnitude() },
        ];
        setResult(resultArray);

    }, []);

    return (
        <Container>
            <Paper p="md" shadow="xs">
                <form onSubmit={handleSubmit}>
                    <Grid gutter="md">
                        <Grid.Col span={6}>
                            <NumberInput
                                label="Scope Aperture (mm)"
                                type="number"
                                required
                                value={scopeAperture}
                                onChange={(value) => setScopeAperture(Number(value))}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <NumberInput
                                label="Scope Focal Ratio (f/number)"
                                type="number"
                                required
                                value={scopeFocalRatio}
                                onChange={(value) => setScopeFocalRatio(Number(value))}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <NumberInput
                                label="Eyepiece Focal Length (mm)"
                                type="number"
                                required
                                value={eyepieceFocalLength}
                                onChange={(value) => setEyepieceFocalLength(Number(value))}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <NumberInput
                                label="Eyepiece Apparent Field (degrees)"
                                type="number"
                                required
                                value={eyepieceApparentField}
                                onChange={(value) => setEyepieceApparentField(Number(value))}
                            />
                        </Grid.Col>
                    </Grid>
                    <Button type="submit" fullWidth mt="lg">
                        Calculate
                    </Button>
                </form>
            </Paper>
            <Paper mt={8} p="md">
                <Text mb={8}>Result</Text>
                {result.map((item, index) => (
                    <div key={index}>
                        <strong>{item.label}:</strong> {item.value}
                    </div>
                ))}
            </Paper>
        </Container>
    );
}
