import { Command } from 'commander';

export default () => {
    const program = new Command();

    program
      .name('gendiff')
      .description('gendiff')
      .version('1.0.0');
    
    program.parse();
};
