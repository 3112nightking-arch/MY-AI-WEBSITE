import os
import sys

# Ensure the openai package is installed; if not, suggest installing it.
try:
    from openai import OpenAI
except ImportError:
    print("Error: The 'openai' package is not installed. Please run: pip install openai", file=sys.stderr)
    sys.exit(1)

# Retrieve key from environment variable
api_key = os.environ.get("ZENMUX_API_KEY")
if not api_key:
    print("Error: ZENMUX_API_KEY environment variable is not set.", file=sys.stderr)
    print("Please set it on your system or run the script providing it.", file=sys.stderr)
    sys.exit(1)

client = OpenAI(
  base_url="https://zenmux.ai/api/v1",
  api_key=api_key,
)

print("Sending request to ZenMux API...")

# Chat Completion
try:
    completion = client.chat.completions.create(
      model="anthropic/claude-opus-4",
      messages=[
        {
          "role": "user",
          "content": "What is the meaning of life?"
        }
      ]
    )
    print("\nResponse from Claude Opus 4 via ZenMux:\n")
    print(completion.choices[0].message.content)
except Exception as e:
    print(f"\nError during API call: {e}", file=sys.stderr)
    sys.exit(1)
