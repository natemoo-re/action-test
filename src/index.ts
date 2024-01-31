import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    console.log(process.env)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run();
