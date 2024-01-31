import * as core from '@actions/core'
import resolve from 'resolve-package-path'

async function run(): Promise<void> {
  try {
    const path = resolve('astro', process.cwd())
    console.log({ path });
    core.setOutput('value', path)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run();
