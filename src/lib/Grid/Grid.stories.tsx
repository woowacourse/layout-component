import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';

type Story = StoryObj<typeof Grid>;

const customGridItemStyle = {
  background: 'rgba(245, 245, 245)',
  padding: '10px',
  borderRadius: '5px',
};

const meta: Meta<typeof Grid> = {
  title: 'LAYOUT/Grid',
  component: Grid,
  args: {
    children: (
      <>
        <Grid.Item style={customGridItemStyle}>Item1</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item2</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item3</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item4</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item5</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item8</Grid.Item>
      </>
    ),
  },
  argTypes: {
    columns: {
      options: Array.from({ length: 12 }, (_, index) => index + 1),
      control: {
        type: 'select',
      },
    },
    rows: {
      options: Array.from({ length: 3 }, (_, index) => index + 1),
      control: {
        type: 'select',
      },
    },
    align: {
      options: [
        'center',
        'end',
        'flex-end',
        'flex-start',
        'self-end',
        'self-start',
        'start',
        'stretch',
      ],
      control: {
        type: 'select',
      },
    },
    justify: {
      options: [
        'center',
        'end',
        'flex-end',
        'flex-start',
        'self-end',
        'self-start',
        'start',
        'stretch',
      ],
    },
  },
};

export default meta;

export const DefaultGrid: Story = {
  args: {
    columns: 4,
    gap: '20px',
  },
};

export const CommonGrid: Story = {
  args: {
    columns: 12,
    gap: '10px',
  },
};

export const CustomColumGrid: Story = {
  args: {
    columns: 4,
    gap: '20px',
    children: (
      <>
        <Grid.Item column={'1/4'} style={customGridItemStyle}>
          Item1 - column 1 / 4
        </Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item2</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item3</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item4</Grid.Item>
        <Grid.Item column={'3/5'} style={customGridItemStyle}>
          Item5 - column 3 / 5
        </Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <Grid.Item column={'3/5'} style={customGridItemStyle}>
          Item8 - column 3 / 5
        </Grid.Item>
      </>
    ),
  },
};

export const CustomRowGrid: Story = {
  args: {
    columns: 4,
    rows: 2,
    gap: '20px',
    children: (
      <>
        <Grid.Item row={'1/3'} style={customGridItemStyle}>
          Item1 - row 1 / 3
        </Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item2</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item3</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item4</Grid.Item>
        <Grid.Item row={'2/4'} style={customGridItemStyle}>
          Item5 - row 2 / 4
        </Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item8</Grid.Item>
      </>
    ),
  },
};

export const CustomColumnRowGrid: Story = {
  args: {
    columns: 4,
    rows: 2,
    gap: '20px',
    children: (
      <>
        <Grid.Item row={'1/4'} column={'1/4'} style={customGridItemStyle}>
          Item1 - row 1 / 4, column 1 / 4
        </Grid.Item>
        {Array.from({ length: 7 }).map((_, index) => (
          <Grid.Item style={customGridItemStyle}>{`Item${
            index + 2
          }`}</Grid.Item>
        ))}
      </>
    ),
  },
};

export const CustomLayoutDirectionGrid: Story = {
  args: {
    columns: 4,
    rows: 2,
    gap: '20px',
    justify: 'center',
  },
};

export const CustomItemDirectionGrid: Story = {
  args: {
    columns: 3,
    gap: '20px',
    children: (
      <>
        <Grid.Item style={customGridItemStyle} align="center">
          Item1 - justify flex-end
        </Grid.Item>
        <Grid.Item
          style={customGridItemStyle}
          justify="flex-start"
          align="center"
        >
          Item2 - justify flex-start, align center
        </Grid.Item>
        <Grid.Item
          style={{
            ...customGridItemStyle,
            height: '120px',
          }}
          justify="center"
        >
          Item3 - justify center
        </Grid.Item>
        <Grid.Item style={customGridItemStyle} justify="center">
          Item4 - justify center
        </Grid.Item>
        {Array.from({ length: 5 }).map((_, index) => (
          <Grid.Item style={customGridItemStyle}>{`Item${
            index + 5
          }`}</Grid.Item>
        ))}
      </>
    ),
  },
};

export const GenerateErrorGridItem: Story = {
  args: {
    columns: 4,
    gap: '20px',
    children: (
      <>
        {Array.from({ length: 8 }).map((_, index) => {
          if (index === 3 || index === 7) {
            return <div>Error</div>;
          }
          return (
            <Grid.Item
              key={index}
              justify={{
                desktop: 'stretch',
                tablet: 'flex-end',
                mobile: 'flex-start',
              }}
              style={customGridItemStyle}
            >
              {`Item${index}`}
            </Grid.Item>
          );
        })}
      </>
    ),
  },
};

export const ResponsiveGrid1: Story = {
  args: {
    columns: {
      desktop: 8,
      tablet: 4,
      mobile: 2,
    },
    gap: '20px',
  },
};

export const ResponsiveGrid2: Story = {
  args: {
    columns: 4,
    gap: '20px',
    children: (
      <>
        {Array.from({ length: 32 }).map((_, index) => (
          <Grid.Item
            key={index}
            justify={{
              desktop: 'stretch',
              tablet: 'flex-end',
              mobile: 'flex-start',
            }}
            style={customGridItemStyle}
          >
            {`Item${index}`}
          </Grid.Item>
        ))}
      </>
    ),
  },
};
