// components/FooterStyles.js
import styled from "styled-components";

export const Box = styled.div`
    padding: var(--spacing-lg);
    background: var(--color-bg-secondary);
    bottom: 0;
    width: 100%;
    border-top: 1px solid var(--color-border-primary);

    @media (max-width: 1000px) {
        padding: var(--spacing-base);
    }
`;

export const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    justify-center: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-base);
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-base);
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: var(--spacing-lg);

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: var(--spacing-base);
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(200px, 1fr)
    );
    grid-gap: var(--spacing-lg);

    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(160px, 1fr)
        );
        grid-gap: var(--spacing-base);
    }
`;

export const FooterLink = styled.a`
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-base);
    font-size: var(--font-size-base);
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: var(--color-text-accent);
    }
`;

export const Heading = styled.p`
    font-size: var(--font-size-xl);
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-lg);
    font-weight: 600;
    font-family: var(--font-primary);
`;