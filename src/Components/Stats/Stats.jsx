import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import {
    StatsContCont,
    StatsCont,
    StatsContDiv,
    StatsContH1,
    StatsContH3,
    LastStat,
} from './Styles';
import { Container } from '../../SharedStyles/SharedStyles';
const Stats = () => {
    let numberAnimation = anime({
        targets: 'h1',
        value: [0, 1200],
        round: 3,
        easing: 'easeInOutExpo',
    });

    /* let animation = anime({
        targets: 'h1',
        // Properties
        translateX: 100,
        borderRadius: 50,
        // Property Parameters
        duration: 2000,
        easing: 'linear',
        // Animation Parameters
        direction: 'alternate',
    }); */

    return (
        <Container>
            <StatsContCont>
                <StatsCont>
                    <StatsContDiv>
                        <StatsContH1
                            value={0}
                            max={1200}
                            onClick={numberAnimation.restart}
                        >
                            1200
                        </StatsContH1>
                        <StatsContH3>Hours of coding</StatsContH3>
                    </StatsContDiv>
                    <StatsContDiv>
                        <StatsContH1>900+</StatsContH1>
                        <StatsContH3>Git Commits</StatsContH3>
                    </StatsContDiv>
                    <StatsContDiv>
                        <StatsContH1>10+</StatsContH1>
                        <StatsContH3>Projects</StatsContH3>
                    </StatsContDiv>
                    <LastStat>
                        <StatsContH1>100+</StatsContH1>
                        <StatsContH3>Hours of Soft Skill</StatsContH3>
                    </LastStat>
                </StatsCont>
            </StatsContCont>
            <img
                src='https://ghchart.rshah.org/021F34/aadityaneve'
                alt='fdsdf'
                style={{ width: '80%', display: 'block', margin: 'auto' }}
            />
        </Container>
    );
};
export default Stats;
